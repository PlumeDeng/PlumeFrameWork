class EditorEvent extends egret.Event {
	public static createSceneComplete:string = "createSceneComplete";
	
	public constructor(type:string,data:any) {
		super(type,false,false,data);
	}
}