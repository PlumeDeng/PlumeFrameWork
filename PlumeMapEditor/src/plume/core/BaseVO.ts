namespace plume {
	/**
	 * 数据基类，提供json序列化接口
	 */
	export class BaseVO {
		public constructor() {
		}
		
		public toJSON():string{
			return JSON.stringify(this);
		}

		public fromJSON(json:string):void {
			JSON.parse(json,(key,value)=>{
				this[key]=value;	
			});
		}
	}
}