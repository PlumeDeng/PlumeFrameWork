namespace plume {
	export class PlumeEngine{
		private static instance:PlumeEngine=null;
		public static Instance():PlumeEngine {
			if (this.instance == null) {
				this.instance = new PlumeEngine();
			}
			return this.instance;
		}
		public constructor() {
		}

		public initEngine(mainUI:eui.UILayer):void {
			GlobalUtil.stage = mainUI.stage;
			PanelUtl.registerPanel();
			let sceneGroup:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
			mainUI.addChild(sceneGroup);
			let panelGroup:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
			mainUI.addChild(panelGroup);
			SceneManager.Instance().init(sceneGroup);
			PanelManager.Instance().init(panelGroup);
		}
	}
}