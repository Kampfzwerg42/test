// @ts-ignore
export abstract class AbstractTwodsixItemSheet extends ItemSheet {

  protected handleContentEditable(html:JQuery):void {
    html.find('div[contenteditable="true"][data-edit]').on(
      'focusout',
      this._onSubmit.bind(this)
    );
    // do the same for the default editors.
    html.find('div[class="editor"]').on(
      'focusout',
      this._onSubmit.bind(this)
    );
  }


  protected activateListeners(html:JQuery):void {
    super.activateListeners(html);
  }

  // @ts-ignore
  getData():ItemSheetData {
    // @ts-ignore
    const data = super.getData().data;
    // @ts-ignore
    data.data.owner = this.actor;

    return data;
  }
}
