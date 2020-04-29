module plume {
	export class SceneManager {
		private static instance:SceneManager=null;
		public static Instance():SceneManager {
			if (this.instance == null) {
				this.instance = new SceneManager();
			}
			return this.instance;
		}
		private sceneGroup:egret.DisplayObjectContainer;
		private scenePool:Object = {};
		constructor() {
		}

		public init(group:egret.DisplayObjectContainer):void {
			this.sceneGroup = group;
		}

		public openScene(sceneName:string,data:any=null):void {
			if(this.sceneGroup==null){
				LogUtil.log("场景管理器尚未初始化");
				return;
			}
			let scene:BaseScene = this.scenePool[sceneName];
			if(scene==null){
				scene = this.createScene(sceneName);
				this.sceneGroup.addChild(scene);
			}
			scene.showScene(data);
		}

		private createScene(sceneName:string):BaseScene{
			let Class = egret.getDefinitionByName(sceneName);
			let scene = new Class();
			this.scenePool[sceneName] = scene;
			return scene;
		}
	}
}