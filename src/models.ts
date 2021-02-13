type DCAttribute = {
	productAttributeName: string;
	productAttributeValueGUID: string;
	supplierItemGUID: string;
	value: string;
};

type DCRecommendedItem = {
	SuplItemNo: string;
	SuplDisplayNo: string;
};

type DCImage = {
	ImageURL: string;
	PrimaryImage: boolean;
};

type DCProductVersion = {
	ProductVersionName: string;
	ProductionTime: number;
};

type DCShipping = {
	ShippingName: string;
	ShippingDescription: string;
	ShipQty: number;
	ShipWeight: number;
	ShipLength: number;
	ShipWidth: number;
	ShipHeight: number;
};

type DCPrice = {
	SupplierItemGUID: string;
	Qty: number;
	Net: number;
	RetailPrice: number;
	DistMargin: string;
	ItemPricesStartDate: Date;
	ItemPricesEndDate: Date;
	InternetDisplay: boolean;
	Setup: boolean;
	PriceTierName: string;
	ProductVersionName: string;
	CurrencyName: string;
	UnitofMeasureName: string;
};

type DCChoice = {
	ItemOptionChoiceGUID: string;
	OptionType: string;
	SupplierItemOptionChoiceNo: string;
	ItemOptionChoiceName: string;
	ProductVersionNames: Array<string>;
	SupplierItemOptionChoiceDisplayNo: string;
	SupplierItemOptionChoiceDisplayName: string;
	ItemOptionDescription: string;
	ItemOptionActiveStartDate: Date;
	ItemOptionActiveEndDate: Date;
	ItemOptionDisplayStartDate: Date;
	ItemOptionDisplayEndDate: Date;
	HexNo: string;
	IsCustom: boolean;
	OrderValue: Number;
	MinMainQty: Number;
	MaxMainQty: Number;
	MinChoiceQty: Number;
	MaxChoiceQty: Number;
	SortOrder: Number;
	ChoicePricing: Array<DCPrice>;
	ChoiceImages: Array<DCImage>;
};

type DCOption = {
	ItemOptionGUID: string;
	OptionType: string;
	SuplItemOptionNo: string;
	OptionName: string;
	ProductVersionNames: Array<string>;
	SuplItemOptionDisplayNo: string;
	SuplItemOptionDisplayName: string;
	Optional: boolean;
	OptionDescription: string;
	FreeOptions: number;
	MinOptionQty: number;
	MaxOptionQty: number;
	MinMainQty: number;
	MaxMainQty: number;
	ItemOptionActiveStartDate: Date;
	ItemOptionActiveEndDate: Date;
	ItemOptionDisplayStartDate: Date;
	ItemOptionDisplayEndDate: Date;
	OrderQuestion: string;
	OrderFormType: string;
	BoundOptionName: string;
	SortOrder: Number;
	ImprintLocations: Array<[string, Number]>;
	OptionPricing: Array<DCPrice>;
	OptionImages: Array<DCImage>;
	Choices: Array<DCPrice>;
};

export type DCProduct = {
	SupplierItemGUID?: string;
	OrderCartName: string;
	SuplItemNo: string;
	ItemName: string;
	SuplDisplayNo: string;
	SuplDisplayName: string;
	Description: string;
	AddInfo: string;
	DistributorOnlyInfo: string;
	Size: string;
	Weight: string;
	OrigZip: string;
	ActiveItemStartDate: Date;
	ActiveItemEndDate: Date;
	DisplayItemStartDate: Date;
	DisplayItemEndDate: Date;
	CountryofManufacturerAbbrev: string;
	ShowNoPricing: boolean;
	ImprintAreaLimit: number;
	Increment: number;
	BrandImage: string;
	TemplateLink: string;
	MarketingLink: string;
	SpecificationLink: string;
	Pricing: Array<DCPrice>;
	Shipping: Array<DCShipping>;
	ProductVersions: Array<DCProductVersion>;
	ProductImages: Array<DCImage>;
	ProductCategories: Array<string>;
	RecommendedItems: Array<DCRecommendedItem>;
	DCAttributes: Array<DCAttribute>;
	Options: Array<DCOption>;
	CompanyKey: string;
	AccessKey: string;
	ignorePriceOnOrder: boolean;
	isLocked: boolean;
	isPublic: boolean;
};
