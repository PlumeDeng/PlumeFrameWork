module plume {
	export class BaseUIScene extends plume.BaseUIComponent implements plume.IScene{
		public constructor() {
			super();
		}

		public closeScene():void {
			this.visible=false;
		}

		sceneData:any;

		public showScene(data:any):void {
			this.sceneData = data;
			this.visible=true;
		}
	}
}