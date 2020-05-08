namespace plume {
	/**
	 * 摄像机类，实现视角变化
	 */
	export class CameraUI {
		public static main:CameraUI;
		/**摄像机显示的对象，实际是镜头所对应的世界*/
		m_container: egret.DisplayObjectContainer;
		/**摄像机位置X */
		m_x: number;
		/**摄像机位置Y */
		m_y: number;
		/**摄像机宽 */
		m_width: number;
		/**摄像机高 */
		m_height: number;
		/**摄像机X方向移动最大值 */
		m_moveMaxX: number;
		/**摄像机Y方向移动最大值*/
		m_moveMaxY: number;
		/**摄像机的焦点X */
		m_zoomX: number;
		/**摄像机的焦点Y */
		m_zoomY: number;
		/**摄像机焦距*/
		m_zoom: number;
		/**跟随对象 */
		m_follower: egret.DisplayObject;
		/**摄像机X轴偏移值 */
		m_cameraOffsetX: number;
		/**摄像机Y轴偏移值 */
		m_cameraOffsetY: number;

		public constructor(x:number, y:number, width: number, height: number) {
			this.m_x = x;
			this.m_y = y;
			this.m_width = width;
			this.m_height = height;
			this.m_cameraOffsetX = 0;
			this.m_cameraOffsetY = 0;
		}
		/**设置镜头绑定对象 */
		public setTarget(container: egret.DisplayObjectContainer) {
			this.m_container = container;
			this.m_zoomX = this.m_container.x;
			this.m_zoomY = this.m_container.y;
			this.m_moveMaxX = this.m_container.width;
			this.m_moveMaxY = this.m_container.height;
		}
		/**设置镜头锚点 
		 * @param LRRate 左右比例 
		 * @param UDRate 上下比例
		 * 根据左右及上下的比例确定镜头的聚焦点
		*/
		public setAnchor(LRRate: number, UDRate: number) {
			if (this.m_container != null) {
				this.m_container.anchorOffsetX = this.m_container.width * LRRate;
				this.m_container.anchorOffsetY = this.m_container.height * UDRate;
				this.m_container.x = this.m_container.anchorOffsetX;
				this.m_container.y = this.m_container.anchorOffsetY;
				this.m_zoomX = this.m_container.anchorOffsetX;
				this.m_zoomY = this.m_container.anchorOffsetY;
			}
		}

		/**设置镜头焦距
		 * @param zoom 焦距，镜头距离世界的比例，默认为1，焦距越小，视觉越大
		*/
		public setZoom(zoom: number) {
			if (this.m_container != null) {
				this.m_container.scaleX = this.m_container.width / this.m_width / zoom;
				this.m_container.scaleY = this.m_container.height / this.m_height / zoom;
			}
		}
		/**旋转
		 * @param rotation 旋转角度
		 * 
		 */
		public setRotation(rotation: number) {
			if (this.m_container != null) {
				this.m_container.rotation = rotation;
			}
		}
		/**设置跟随者 */
		public follow(follower: eui.Component) {
			if (this.m_container != null) {
				this.m_follower = follower;
				this.m_zoomX = this.m_follower.x;
				this.m_zoomY = this.m_follower.y;
				this.setAnchor(this.m_follower.x / this.m_container.width, this.m_follower.y / this.m_container.height);
			}
		}
		/**摄像机X轴移动 
		 * @param x 沿x轴移动的有向速度
		 * 
		*/
		public CameraMoveX(x: number) {
			console.log(x);
			this.m_cameraOffsetX = x;
			this.CameraUpdate();
			this.m_cameraOffsetX = 0;
		}
		/**摄像机Y轴移动 
		 * @param y 沿y轴移动的有向速度
	 	 * 
		 */
		public CameraMoveY(y: number) {
			this.m_cameraOffsetY = y;
			this.CameraUpdate();
			this.m_cameraOffsetY = 0;
		}

		/**
		 * 摄像机移动，实际上是摄像机对应的容器反方向移动
		*/
		public CameraUpdate() {
			if(this.m_container==null) return;
			this.m_container.x -= this.m_cameraOffsetX;
			this.m_container.y -= this.m_cameraOffsetY;
		}
	}
}