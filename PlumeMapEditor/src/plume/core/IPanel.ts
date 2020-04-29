namespace plume {
	export interface IPanel {
		panelData:any;
		showPanel(data:any):void;
		closePanel():void;
		destroy():void;
	}
}