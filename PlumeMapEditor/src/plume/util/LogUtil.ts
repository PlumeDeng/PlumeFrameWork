namespace plume {
	/**
	 * 统一日志入口，后续会增加日志上传功能
	 */
	export class LogUtil {
		public constructor() {
		}

		public static log(msg:string):void {
			let date = new Date();
			let sign = "[" + date.getFullYear()+"-"+ (date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds() + "]";
			console.log(sign+msg);
		}
	}
}