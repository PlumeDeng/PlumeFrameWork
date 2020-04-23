window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","MapEditor":"resource/eui_skins/MapEditor.exml","NewScenePanel":"resource/eui_skins/NewScenePanel.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MapEditor.exml'] = window.MapEditorSkin = (function (_super) {
	__extends(MapEditorSkin, _super);
	function MapEditorSkin() {
		_super.call(this);
		this.skinParts = ["btnNewScene","btnImportScene","btnImportMap","btnEdit","btnTerrain","btnBuilding","btnRole","btnTree","btnWater","btnCut","btnExport","headGroup","labSceneName","labSceneWidth","labSceneHeight","labGridWidth","labGridHeight","leftUpGroup","leftDownGroup","centerGroup","rightGroup"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this.headGroup_i(),this.leftUpGroup_i(),this._Scroller1_i(),this._Scroller2_i(),this._Scroller3_i()];
	}
	var _proto = MapEditorSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa5a0a0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.percentWidth = 100;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0xA5A0A0;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.strokeColor = 0x85e810;
		t.strokeWeight = 1;
		t.width = 200;
		t.x = 0;
		t.y = 50;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0xA5A0A0;
		t.height = 830;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.strokeColor = 0x1052d3;
		t.strokeWeight = 1;
		t.width = 200;
		t.x = 0;
		t.y = 250;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0xA5A0A0;
		t.height = 1030;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.strokeColor = 0xe51010;
		t.strokeWeight = 1;
		t.width = 1520;
		t.x = 200;
		t.y = 50;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.fillColor = 0xA5A0A0;
		t.height = 1030;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.strokeColor = 0x0697d6;
		t.strokeWeight = 1;
		t.width = 200;
		t.x = 1720;
		t.y = 50;
		return t;
	};
	_proto.headGroup_i = function () {
		var t = new eui.Group();
		this.headGroup = t;
		t.height = 50;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.btnNewScene_i(),this.btnImportScene_i(),this.btnImportMap_i(),this.btnEdit_i(),this.btnTerrain_i(),this.btnBuilding_i(),this.btnRole_i(),this.btnTree_i(),this.btnWater_i(),this.btnCut_i(),this.btnExport_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.btnNewScene_i = function () {
		var t = new eui.Button();
		this.btnNewScene = t;
		t.label = "新建场景";
		t.x = 50;
		t.y = 25;
		return t;
	};
	_proto.btnImportScene_i = function () {
		var t = new eui.Button();
		this.btnImportScene = t;
		t.label = "导入场景";
		t.x = 60;
		t.y = 35;
		return t;
	};
	_proto.btnImportMap_i = function () {
		var t = new eui.Button();
		this.btnImportMap = t;
		t.label = "导入地图";
		t.x = 60;
		t.y = 35;
		return t;
	};
	_proto.btnEdit_i = function () {
		var t = new eui.Button();
		this.btnEdit = t;
		t.label = "编辑";
		t.x = 50;
		t.y = 50;
		return t;
	};
	_proto.btnTerrain_i = function () {
		var t = new eui.Button();
		this.btnTerrain = t;
		t.label = "地形";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.btnBuilding_i = function () {
		var t = new eui.Button();
		this.btnBuilding = t;
		t.label = "建筑";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnRole_i = function () {
		var t = new eui.Button();
		this.btnRole = t;
		t.label = "角色";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.btnTree_i = function () {
		var t = new eui.Button();
		this.btnTree = t;
		t.label = "树";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.btnWater_i = function () {
		var t = new eui.Button();
		this.btnWater = t;
		t.label = "水";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.btnCut_i = function () {
		var t = new eui.Button();
		this.btnCut = t;
		t.label = "地图切块";
		t.x = 60;
		t.y = 60;
		return t;
	};
	_proto.btnExport_i = function () {
		var t = new eui.Button();
		this.btnExport = t;
		t.label = "导出json";
		t.x = 70;
		t.y = 70;
		return t;
	};
	_proto.leftUpGroup_i = function () {
		var t = new eui.Group();
		this.leftUpGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this.labSceneName_i(),this.labSceneWidth_i(),this.labSceneHeight_i(),this.labGridWidth_i(),this.labGridHeight_i()];
		return t;
	};
	_proto.labSceneName_i = function () {
		var t = new eui.Label();
		this.labSceneName = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "名称：";
		t.x = 5;
		t.y = 10;
		return t;
	};
	_proto.labSceneWidth_i = function () {
		var t = new eui.Label();
		this.labSceneWidth = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "宽度：0";
		t.x = 5;
		t.y = 40;
		return t;
	};
	_proto.labSceneHeight_i = function () {
		var t = new eui.Label();
		this.labSceneHeight = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "高度：0";
		t.x = 5;
		t.y = 70;
		return t;
	};
	_proto.labGridWidth_i = function () {
		var t = new eui.Label();
		this.labGridWidth = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "网格宽度：0";
		t.x = 5;
		t.y = 100;
		return t;
	};
	_proto.labGridHeight_i = function () {
		var t = new eui.Label();
		this.labGridHeight = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "网格高度：0";
		t.x = 5;
		t.y = 130;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 830;
		t.width = 200;
		t.x = 0;
		t.y = 250;
		t.viewport = this.leftDownGroup_i();
		return t;
	};
	_proto.leftDownGroup_i = function () {
		var t = new eui.Group();
		this.leftDownGroup = t;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.height = 1030;
		t.width = 1520;
		t.x = 200;
		t.y = 50;
		t.viewport = this.centerGroup_i();
		return t;
	};
	_proto.centerGroup_i = function () {
		var t = new eui.Group();
		this.centerGroup = t;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.height = 1030;
		t.width = 200;
		t.x = 1720;
		t.y = 50;
		t.viewport = this.rightGroup_i();
		return t;
	};
	_proto.rightGroup_i = function () {
		var t = new eui.Group();
		this.rightGroup = t;
		return t;
	};
	return MapEditorSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/NewScenePanel.exml'] = window.NewScenePanelSkin = (function (_super) {
	__extends(NewScenePanelSkin, _super);
	function NewScenePanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton","sureButton","inputID","inputName","inputWidth","inputHeight","inputGridWidth","inputGridHeight"];
		
		this.height = 377;
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i(),this.sureButton_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.inputID_i(),this.inputName_i(),this.inputWidth_i(),this.inputHeight_i(),this.inputGridWidth_i(),this.inputGridHeight_i()];
	}
	var _proto = NewScenePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.text = "新建场景";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = -77;
		t.label = "取消";
		return t;
	};
	_proto.sureButton_i = function () {
		var t = new eui.Button();
		this.sureButton = t;
		t.bottom = 5;
		t.horizontalCenter = 85;
		t.label = "确定";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "场景ID";
		t.textAlign = "left";
		t.textColor = 0x5b2f2f;
		t.x = 60;
		t.y = 70;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "场景名称";
		t.textAlign = "left";
		t.textColor = 0x5B2F2F;
		t.x = 60;
		t.y = 110;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "场景宽度";
		t.textAlign = "left";
		t.textColor = 0x5B2F2F;
		t.x = 60;
		t.y = 150;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "场景高度";
		t.textAlign = "left";
		t.textColor = 0x5B2F2F;
		t.x = 60;
		t.y = 190;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "网格宽度";
		t.textAlign = "left";
		t.textColor = 0x5B2F2F;
		t.x = 60;
		t.y = 230;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "网格高度";
		t.textAlign = "left";
		t.textColor = 0x5B2F2F;
		t.x = 60;
		t.y = 270;
		return t;
	};
	_proto.inputID_i = function () {
		var t = new eui.TextInput();
		this.inputID = t;
		t.height = 30;
		t.width = 200;
		t.x = 210;
		t.y = 70;
		return t;
	};
	_proto.inputName_i = function () {
		var t = new eui.TextInput();
		this.inputName = t;
		t.height = 30;
		t.width = 200;
		t.x = 210;
		t.y = 110;
		return t;
	};
	_proto.inputWidth_i = function () {
		var t = new eui.TextInput();
		this.inputWidth = t;
		t.height = 30;
		t.width = 200;
		t.x = 210;
		t.y = 150;
		return t;
	};
	_proto.inputHeight_i = function () {
		var t = new eui.TextInput();
		this.inputHeight = t;
		t.height = 30;
		t.width = 200;
		t.x = 210;
		t.y = 190;
		return t;
	};
	_proto.inputGridWidth_i = function () {
		var t = new eui.TextInput();
		this.inputGridWidth = t;
		t.height = 30;
		t.width = 200;
		t.x = 210;
		t.y = 230;
		return t;
	};
	_proto.inputGridHeight_i = function () {
		var t = new eui.TextInput();
		this.inputGridHeight = t;
		t.height = 30;
		t.width = 200;
		t.x = 210;
		t.y = 270;
		return t;
	};
	return NewScenePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd6d2d1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);