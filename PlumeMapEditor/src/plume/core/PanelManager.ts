namespace plume{
	export class PanelManager {
		private static instance:PanelManager=null;
		public static Instance():PanelManager {
			if (this.instance == null) {
				this.instance = new PanelManager();
			}
			return this.instance;
		}
		private panelGroup:egret.DisplayObjectContainer;
		private panelPool:Object = {};
		constructor() {
		}

		public init(group:egret.DisplayObjectContainer):void {
			this.panelGroup = group;
		}

		public openPanel(panelName:string,data:any=null):void {
			if(this.panelGroup==null){
				LogUtil.log("界面管理器尚未初始化");
				return;
			}
			let panel:BasePanel = this.panelPool[panelName];
			if(panel==null){
				panel = this.createPanel(panelName);
				this.panelGroup.addChild(panel);
			}
			panel.x = (GlobalUtil.stage.stageWidth-panel.width)>>1;
			panel.y = (GlobalUtil.stage.stageHeight-panel.height)/3;
			panel.showPanel(data);
		}

		private createPanel(panelName:string):BasePanel{
			let Class = egret.getDefinitionByName(panelName);
			let panel = new Class();
			this.panelPool[panelName] = panel;
			return panel;
		}
	}
}