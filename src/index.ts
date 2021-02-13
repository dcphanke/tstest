import { DCProduct } from './models';
import * as csvParse from 'csv-parse';
import fs = require('fs');

var myParser: csvParse.CsvParser = csvParse({ delimiter: ',' }, function (data, err) {
	console.log(data);
});
