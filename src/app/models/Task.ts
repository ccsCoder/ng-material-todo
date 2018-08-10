/**
 * 
 * {
    "_id": "5b4cb28f1abd0800146e8b9f",
    "title": "Kill Bill",
    "description": "I am Beatrix !",
    "color": "#ffb74d",
    "complete": false,
    "pinned": "false",
    "__v": 0
  }
 * 
 * 
 */

export class Task {
    
    private _title: string;
    private _description: string;
    private _color: string;
    private _complete: boolean;
    private _pinned: boolean;


    constructor(title:string, description:string, color:string = '#ffb74d', complete:boolean = false, pinned:boolean = false ) {
        this._title = title;
        this._description = description;
        this._color = color == null ? '#ffb74d' : color;
        this._complete = complete || false;
        this._pinned = pinned || false;

    }



    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Getter color
     * @return {string}
     */
	public get color(): string {
		return this._color;
	}

    /**
     * Setter color
     * @param {string} value
     */
	public set color(value: string) {
		this._color = value;
	}

    /**
     * Getter complete
     * @return {boolean}
     */
	public get complete(): boolean {
		return this._complete;
	}

    /**
     * Setter complete
     * @param {boolean} value
     */
	public set complete(value: boolean) {
		this._complete = value;
	}

    /**
     * Getter pinned
     * @return {boolean}
     */
	public get pinned(): boolean {
		return this._pinned;
	}

    /**
     * Setter pinned
     * @param {boolean} value
     */
	public set pinned(value: boolean) {
		this._pinned = value;
	}
    
}