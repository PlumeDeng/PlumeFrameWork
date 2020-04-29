namespace plume{
	export class SceneVO extends BaseVO {
		public id:string="";
		public name:string="";
		public width:number=0;
		public height:number=0;
		public gridWidth:number=0;
		public gridHeight:number=0;
		public constructor(id:string="",name:string="",width:number=0,height:number=0,gridWidth:number=0,gridHeight:number=0) {
			super();
			this.id=id;
			this.name=name;
			this.width=width;
			this.height=height;
			this.gridWidth=gridWidth;
			this.gridHeight=gridHeight;
		}
	}
}