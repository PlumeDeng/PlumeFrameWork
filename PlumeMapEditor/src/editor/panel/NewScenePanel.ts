class NewScenePanel extends plume.BasePanel{
	private inputID:eui.TextInput;
	private inputName:eui.TextInput;
	private inputWidth:eui.TextInput;
	private inputHeight:eui.TextInput;
	private inputGridWidth:eui.TextInput;
	private inputGridHeight:eui.TextInput;
	private sureButton:eui.Button;
	public constructor() {
		super("NewScenePanel");
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	
	private init():void {
		this.sureButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnSureButton,this,false);
	}

	private OnSureButton(e:egret.TouchEvent):void {
		let id:string = this.inputID.text.trim();
		let name:string = this.inputName.text.trim();
		let width:string = this.inputWidth.text.trim();
		let height:string = this.inputHeight.text.trim();
		let gridWidth:string = this.inputGridWidth.text.trim();
		let gridHeight:string = this.inputGridHeight.text.trim();
		if(id=="")return;
		if(name=="")return;
		if(width=="")return;
		if(height=="")return;
		if(gridWidth=="")return;
		if(gridHeight=="")return;
		let vo = new plume.SceneVO(id,name,parseInt(width),parseInt(height),parseInt(gridWidth),parseInt(gridHeight));
		this.dispatchViewEvent(new EditorEvent(EditorEvent.createSceneComplete,vo));
		this.closePanel();
	}

	public destroy():void {
		super.destroy();
		this.sureButton.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.OnSureButton,this,false);
		this.close();
	}
}