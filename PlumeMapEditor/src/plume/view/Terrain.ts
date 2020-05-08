namespace plume {
	export class Terrain extends BaseSprite{
		private sceneVO:SceneVO;

		public constructor() {
			super();
		}

		public setData(sceneVO:SceneVO):void {
			this.sceneVO = sceneVO;
			this.width = this.sceneVO.width*this.sceneVO.gridWidth;
			this.height = this.sceneVO.height*this.sceneVO.gridHeight;
		}
	}
}