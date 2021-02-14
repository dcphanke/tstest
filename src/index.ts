import { DCProduct } from './models';
import csvParse from 'csv-parse';
import fs from 'fs';
import path from 'path';
const results: string[][] = [];

type ChoiceSku = {
	ProductName: string;
	ProductDescription: string;
	ManufacturerName: string;
	SKUItemNumber: string;
	MFGSku: string;
	ColorSizeSku: string;
	SizeCode: string;
	Weightoz: string;
	Color1Name: string;
	Color2Name: string;
	Color1HexValue: string;
	Color2HexValue: string;
	SupplierName: string;
	CustomerPrice: string;
	GTINUPCCode: string;
	SearchTags: string;
	FrontImage: string;
	BackImage: string;
	ThirdImage: string;
	FourthImage: string;
	PreDecoratedItem: string;
	MaxImprintColors: string;
	MinimumPerOrder: string;
};
const csvPath = path.resolve(__dirname, '../testData/testSupplierData.csv');

fs.createReadStream(csvPath)
	.pipe(csvParse())
	.on('data', (data) => results.push(data))
	.on('end', () => {
		const [, ...productRows] = results;

		const products = productRows.map(rowToProduct);
	});

function rowToProduct(row: string[]): ChoiceSku {
	const ChoiceSku = {
		ProductName: row[0],
		ProductDescription: row[1],
		ManufacturerName: row[2],
		SKUItemNumber: row[3],
		MFGSku: row[4],
		ColorSizeSku: row[5],
		SizeCode: row[6],
		Weightoz: row[7],
		Color1Name: row[8],
		Color2Name: row[9],
		Color1HexValue: row[10],
		Color2HexValue: row[11],
		SupplierName: row[12],
		CustomerPrice: row[13],
		GTINUPCCode: row[14],
		SearchTags: row[15],
		FrontImage: row[16],
		BackImage: row[17],
		ThirdImage: row[18],
		FourthImage: row[19],
		PreDecoratedItem: row[20],
		MaxImprintColors: row[21],
		MinimumPerOrder: row[22],
	};
	return;
}
