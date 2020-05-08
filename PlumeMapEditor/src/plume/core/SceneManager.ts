namespace plume {
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
			CameraUI.main = new CameraUI(0,0,GlobalUtil.stage.stageWidth,GlobalUtil.stage.stageHeight);
		}
		
		public openUIScene(sceneName:string,data:any=null):void {
			if(this.sceneGroup==null){
				LogUtil.log("场景管理器尚未初始化");
				return;
			}
			let scene:BaseUIScene = this.scenePool[sceneName];
			if(scene==null){
				scene = this.createUIScene(sceneName);
				this.sceneGroup.addChild(scene);
				scene.height = plume.GlobalUtil.stage.stageHeight;
			}
			scene.showScene(data);
		}

		private createUIScene(sceneName:string):BaseUIScene{
			let Class = egret.getDefinitionByName(sceneName);
			let scene = new Class();
			this.scenePool[sceneName] = scene;
			return scene;
		}
	}
}