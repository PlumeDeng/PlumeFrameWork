class PanelUtl {
	public constructor() {
	}

	/**
	 * 注册窗口到window
	 */
	public static registerPanel():void {
		window[NewScenePanel.winName] = NewScenePanel;
	}
}