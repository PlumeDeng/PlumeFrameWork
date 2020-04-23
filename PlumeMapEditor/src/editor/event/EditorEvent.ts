class EditorEvent extends plume.BaseViewEvent {
	public static createSceneComplete:string = "createSceneComplete";
	
	public constructor(type:string,data:any) {
		super(type,data);
	}
}