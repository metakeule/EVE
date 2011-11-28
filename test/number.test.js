
require("./helper.js");

describe("type", function() {
	var type = jschema.type;
	describe("number", function() {

		it("should have number type", function() {
			ok( type.number );
		});

		it("should convert type", function() {
			strictEqual( type.number().val("23dd").val(), 23 );
			strictEqual( type.number().val("23.11").val(), 23.11 );
			strictEqual( type.number().val(23.11).val(), 23.11 );
		});

		it("should be able to compare", function() {
			ok( !type.number().min(10).max(30).val(23.11).validate() );
			ok( type.number().min(10).max(30).val(9).validate() );
			ok( type.number().min(10).max(30).val(40).validate() );
		});

	});

	describe("integer", function() {

		it("should have integer type", function() {
			ok( type.integer );
		});

		it("should convert type", function() {
			strictEqual( type.integer().val("23dd").val(), 23 );
			strictEqual( type.integer().val("23.11").val(), 23 );
			strictEqual( type.integer().val(23.11).val(), 23 );
		});
	});
});

