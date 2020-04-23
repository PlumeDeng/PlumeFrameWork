class MapEditor extends plume.BaseUIComponent implements plume.IScene {
	//顶部菜单栏
	private headGroup:eui.Group;
	private btnNewScene:eui.Button;//新建场景
	private btnImportScene:eui.Button;//导入场景
	private btnImportMap:eui.Button;//导入地图
	private btnEdit:eui.Button;//编辑
	private btnTerrain:eui.Button;//地形
	private btnBuilding:eui.Button;//建筑
	private btnRole:eui.Button;//角色
	private btnTree:eui.Button;//树
	private btnWater:eui.Button;//水
	private btnCut:eui.Button;//地图切块
	private btnExport:eui.Button;//导出json

	//左上场景信息区
	private leftUpGroup:eui.Group;
	private labSceneName:eui.Label;
	private labSceneWidth:eui.Label;
	private labSceneHeight:eui.Label;
	private labGridWidth:eui.Label;
	private labGridHeight:eui.Label;

	//左下资源列表
	private leftDownGroup:eui.Group;

	//中间场景编辑区
	private centerGroup:eui.Group;

	//右边属性编辑区
	private rightGroup:eui.Group;

	public constructor() {
		super();
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
		this.addViewEventListenner(EditorEvent.createSceneComplete,this.onCreateSceneComplete,this);
		this.btnNewScene.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnNewScene,this,false);
	}

	private onCreateSceneComplete(e:EditorEvent):void {
		let vo:plume.SceneVO = e.data;
		this.labSceneName.text ="名称："+vo.name+"("+vo.id+")";
		this.labSceneWidth.text = "宽度："+vo.width;
		this.labSceneHeight.text = "高度："+vo.height;
		this.labGridWidth.text = "网格宽度："+vo.gridWidth;
		this.labGridHeight.text = "网格高度："+vo.gridHeight;
	}

	private onBtnNewScene(e:egret.TouchEvent):void {
		plume.PanelManager.Instance<plume.PanelManager>(plume.PanelManager).openPanel();
		let panel = new NewScenePanel();
		panel.title = "新建场景";
		this.addChild(panel);
		panel.x = (this.width-panel.width)>>1;
		panel.y = (this.height-panel.height)/3;
	}
	
}