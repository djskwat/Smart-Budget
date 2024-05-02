document.addEventListener("DOMContentLoaded", function() {
    // Enregistrer la licence Syncfusion
    ej.base.registerLicense("ORg4AjUWIQA/Gnt2UFhhQlJBfV5AQmBIYVp/TGpJfl96cVVBJAtUQF1hTX5WdkRiX31ac3JRQ2Ne");

    // Configuration des éléments pour la barre d'outils MultiRow
    var items = [
        { prefixIcon: 'e-icons e-cut', tooltipText: 'Cut', text: 'Cut' },
        { prefixIcon: 'e-icons e-copy', tooltipText: 'Copy', text: 'Copy' },
        { prefixIcon: 'e-icons e-paste', tooltipText: 'Paste', text: 'Paste' },
        { type: 'Separator' },
        { prefixIcon: 'e-icons e-bold', tooltipText: 'Bold', text: 'Bold' },
        { prefixIcon: 'e-icons e-underline', tooltipText: 'Underline', text: 'Underline' },
        { prefixIcon: 'e-icons e-italic', tooltipText: 'Italic', text: 'Italic' },
        { type: 'Separator' },
        { prefixIcon: 'e-icons e-list-unordered', tooltipText: 'Bullets', text: 'Bullets' },
        { prefixIcon: 'e-icons e-list-ordered', tooltipText: 'Numbering', text: 'Numbering' },
        { type: 'Separator' },
        { prefixIcon: 'e-icons e-undo', tooltipText: 'Undo', text: 'Undo' },
        { prefixIcon: 'e-icons e-redo', tooltipText: 'Redo', text: 'Redo' },
        { type: 'Separator' },
        { prefixIcon: 'e-icons e-align-left', tooltipText: 'Align-Left', text: 'Left' },
        { prefixIcon: 'e-icons e-align-right', tooltipText: 'Align-Right', text: 'Right' },
        { prefixIcon: 'e-icons e-align-center', tooltipText: 'Align-Center', text: 'Center' },
        { prefixIcon: 'e-icons e-justify', tooltipText: 'Align-Justify', text: 'Justify' },
        { type: 'Separator' },
        { prefixIcon: 'e-icons e-increase-indent', tooltipText: 'Text-Indent', text: 'Indent' },
        { prefixIcon: 'e-icons e-decrease-indent', text: 'Outdent', tooltipText: 'Text-Outdent' },
        { prefixIcon: 'e-icons e-erase', text: 'Clear', tooltipText: 'Clear' },
    ];

    // Initialisation de la barre d'outils MultiRow
    var toolbarObj = new ej.navigations.Toolbar({
        overflowMode: 'MultiRow',
        items: ej.base.extend([], items, null, true)
    });
    toolbarObj.appendTo('#toolbar_MultiRow');
});
