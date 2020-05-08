namespace plume {
	export class PlumeFramwork{
		private static instance:PlumeFramwork=null;
		public static Instance():PlumeFramwork {
			if (this.instance == null) {
				this.instance = new PlumeFramwork();
			}
			return this.instance;
		}

		private world:ThreeWorld;//3D世界

		public constructor() {
		}

		public init(root:egret.DisplayObjectContainer):void {
			if(GlobalUtil.stage)return;
			GlobalUtil.stage = root.stage;
			PanelUtl.registerPanel();
			let sceneGroup:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
			root.addChild(sceneGroup);
			let panelGroup:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
			root.addChild(panelGroup);
			SceneManager.Instance().init(sceneGroup);
			PanelManager.Instance().init(panelGroup);

			egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
				context.onUpdate = () => {
					if(this.world)this.world.render();
					CameraUI.main.CameraUpdate();
				}
			})

			egret.lifecycle.onPause = () => {
				egret.ticker.pause();
			}

			egret.lifecycle.onResume = () => {
				egret.ticker.resume();
			}

			//inject the custom material parser
			//注入自定义的素材解析器
			let assetAdapter = new AssetAdapter();
			egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
			egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

			
			this.runGame().catch(e => {
				console.log(e);
			})
		}
		
		private async runGame() {
			await this.loadResource();
			this.init3DWorld();
			this.createGameScene();
		}

		private async loadResource() {
			try {
				const loadingView = new LoadingUI();
				GlobalUtil.stage.addChild(loadingView);
				await RES.loadConfig("resource/default.res.json", "resource/");
				await this.loadTheme();
				await RES.loadGroup("preload", 0, loadingView);
				GlobalUtil.stage.removeChild(loadingView);
			}
			catch (e) {
				console.error(e);
			}
		}

		private loadTheme() {
			return new Promise((resolve, reject) => {
				// load skin theme configuration file, you can manually modify the file. And replace the default skin.
				//加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
				let theme = new eui.Theme("resource/default.thm.json", GlobalUtil.stage);
				theme.addEventListener(eui.UIEvent.COMPLETE, () => {
					resolve();
				}, this);

			})
		}

		private init3DWorld():void {
			this.world = new ThreeWorld();
			GlobalUtil.stage.addEventListener(egret.Event.RESIZE,this.onResize,this,false);
		}

		private onResize(e:egret.Event):void {
			this.world.onWindowResize();
		}

		/**
		 * 创建场景界面
		 * Create scene interface
		 */
		protected createGameScene(): void {
			plume.SceneManager.Instance().openUIScene(MapEditorScene.sceneName);
		}
	}
}