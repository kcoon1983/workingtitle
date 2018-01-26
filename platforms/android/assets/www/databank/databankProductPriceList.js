var DatabankProductPriceList = function() {
	this.initialize = function() {
		window.locaStorage.setItem("databankProductPriceList", JSON.stringify(
			[
				{
					"productpricelist_id": 0,
					"productpricelist_product_id": 0,
					"productpricelist_description": "3.2GHz 8-core Intel Xeon W processor<br>" +
													"Turbo Boost up to 4.2GHz<br>" +
													"32GB 2666MHz ECC memory, configurable up to 128GB<br>" +
													"1TB SSD storage<br>" +
													"Radeon Pro Vega 56 with 8GB HBM2 memory<br>" +
													"10Gb Ethernet<br>" +
													"Four Thunderbold 3 ports<br>" +
													"27-inch Retina 5K 5120x2880 P3 display",
					"productpricelist_price": 20999
				}
			]
		));
	};
}