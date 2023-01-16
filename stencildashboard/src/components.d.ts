/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CalendarEntry } from "./utils/calendar-entry";
import { CardDataI } from "./type";
export namespace Components {
    interface AppRoot {
    }
    interface ChartsDthree {
        "data": string;
        "height": number;
        "width": number;
    }
    interface ComboBox {
    }
    interface FileUpload {
    }
    interface JigsawAreaSegment {
        "tileImage": string;
    }
    interface JigsawManager {
    }
    interface MyComponent {
        "dayNames": string[];
        "monthNames": string[];
        "showFillDays": boolean;
    }
    interface PrimeTable {
        "lists": string;
    }
    interface ToDoCardList {
    }
    interface ToDoCards {
        "cardData": CardDataI;
    }
    interface ZPalette {
    }
    interface ZPaletteItem {
        "isLarge": boolean;
        "name": string;
    }
}
export interface FileUploadCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFileUploadElement;
}
export interface MyComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyComponentElement;
}
export interface ToDoCardListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLToDoCardListElement;
}
export interface ToDoCardsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLToDoCardsElement;
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLChartsDthreeElement extends Components.ChartsDthree, HTMLStencilElement {
    }
    var HTMLChartsDthreeElement: {
        prototype: HTMLChartsDthreeElement;
        new (): HTMLChartsDthreeElement;
    };
    interface HTMLComboBoxElement extends Components.ComboBox, HTMLStencilElement {
    }
    var HTMLComboBoxElement: {
        prototype: HTMLComboBoxElement;
        new (): HTMLComboBoxElement;
    };
    interface HTMLFileUploadElement extends Components.FileUpload, HTMLStencilElement {
    }
    var HTMLFileUploadElement: {
        prototype: HTMLFileUploadElement;
        new (): HTMLFileUploadElement;
    };
    interface HTMLJigsawAreaSegmentElement extends Components.JigsawAreaSegment, HTMLStencilElement {
    }
    var HTMLJigsawAreaSegmentElement: {
        prototype: HTMLJigsawAreaSegmentElement;
        new (): HTMLJigsawAreaSegmentElement;
    };
    interface HTMLJigsawManagerElement extends Components.JigsawManager, HTMLStencilElement {
    }
    var HTMLJigsawManagerElement: {
        prototype: HTMLJigsawManagerElement;
        new (): HTMLJigsawManagerElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPrimeTableElement extends Components.PrimeTable, HTMLStencilElement {
    }
    var HTMLPrimeTableElement: {
        prototype: HTMLPrimeTableElement;
        new (): HTMLPrimeTableElement;
    };
    interface HTMLToDoCardListElement extends Components.ToDoCardList, HTMLStencilElement {
    }
    var HTMLToDoCardListElement: {
        prototype: HTMLToDoCardListElement;
        new (): HTMLToDoCardListElement;
    };
    interface HTMLToDoCardsElement extends Components.ToDoCards, HTMLStencilElement {
    }
    var HTMLToDoCardsElement: {
        prototype: HTMLToDoCardsElement;
        new (): HTMLToDoCardsElement;
    };
    interface HTMLZPaletteElement extends Components.ZPalette, HTMLStencilElement {
    }
    var HTMLZPaletteElement: {
        prototype: HTMLZPaletteElement;
        new (): HTMLZPaletteElement;
    };
    interface HTMLZPaletteItemElement extends Components.ZPaletteItem, HTMLStencilElement {
    }
    var HTMLZPaletteItemElement: {
        prototype: HTMLZPaletteItemElement;
        new (): HTMLZPaletteItemElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "charts-dthree": HTMLChartsDthreeElement;
        "combo-box": HTMLComboBoxElement;
        "file-upload": HTMLFileUploadElement;
        "jigsaw-area-segment": HTMLJigsawAreaSegmentElement;
        "jigsaw-manager": HTMLJigsawManagerElement;
        "my-component": HTMLMyComponentElement;
        "prime-table": HTMLPrimeTableElement;
        "to-do-card-list": HTMLToDoCardListElement;
        "to-do-cards": HTMLToDoCardsElement;
        "z-palette": HTMLZPaletteElement;
        "z-palette-item": HTMLZPaletteItemElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface ChartsDthree {
        "data"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface ComboBox {
    }
    interface FileUpload {
        "onUploadCompleted"?: (event: FileUploadCustomEvent<Blob>) => void;
    }
    interface JigsawAreaSegment {
        "tileImage"?: string;
    }
    interface JigsawManager {
    }
    interface MyComponent {
        "dayNames"?: string[];
        "monthNames"?: string[];
        "onDayChanged"?: (event: MyComponentCustomEvent<CalendarEntry>) => void;
        "onMonthChanged"?: (event: MyComponentCustomEvent<CalendarEntry>) => void;
        "showFillDays"?: boolean;
    }
    interface PrimeTable {
        "lists"?: string;
    }
    interface ToDoCardList {
        "onAddToDoTask"?: (event: ToDoCardListCustomEvent<CardDataI>) => void;
    }
    interface ToDoCards {
        "cardData"?: CardDataI;
        "onRemoveTodoTask"?: (event: ToDoCardsCustomEvent<CardDataI>) => void;
        "onUpdateTodoTask"?: (event: ToDoCardsCustomEvent<CardDataI>) => void;
    }
    interface ZPalette {
    }
    interface ZPaletteItem {
        "isLarge"?: boolean;
        "name": string;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "charts-dthree": ChartsDthree;
        "combo-box": ComboBox;
        "file-upload": FileUpload;
        "jigsaw-area-segment": JigsawAreaSegment;
        "jigsaw-manager": JigsawManager;
        "my-component": MyComponent;
        "prime-table": PrimeTable;
        "to-do-card-list": ToDoCardList;
        "to-do-cards": ToDoCards;
        "z-palette": ZPalette;
        "z-palette-item": ZPaletteItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "charts-dthree": LocalJSX.ChartsDthree & JSXBase.HTMLAttributes<HTMLChartsDthreeElement>;
            "combo-box": LocalJSX.ComboBox & JSXBase.HTMLAttributes<HTMLComboBoxElement>;
            "file-upload": LocalJSX.FileUpload & JSXBase.HTMLAttributes<HTMLFileUploadElement>;
            "jigsaw-area-segment": LocalJSX.JigsawAreaSegment & JSXBase.HTMLAttributes<HTMLJigsawAreaSegmentElement>;
            "jigsaw-manager": LocalJSX.JigsawManager & JSXBase.HTMLAttributes<HTMLJigsawManagerElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "prime-table": LocalJSX.PrimeTable & JSXBase.HTMLAttributes<HTMLPrimeTableElement>;
            "to-do-card-list": LocalJSX.ToDoCardList & JSXBase.HTMLAttributes<HTMLToDoCardListElement>;
            "to-do-cards": LocalJSX.ToDoCards & JSXBase.HTMLAttributes<HTMLToDoCardsElement>;
            "z-palette": LocalJSX.ZPalette & JSXBase.HTMLAttributes<HTMLZPaletteElement>;
            "z-palette-item": LocalJSX.ZPaletteItem & JSXBase.HTMLAttributes<HTMLZPaletteItemElement>;
        }
    }
}
