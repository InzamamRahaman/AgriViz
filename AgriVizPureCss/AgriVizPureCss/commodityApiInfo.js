

// Details needed to access the data from the REST API
var root_path = ""
var monhtly_commodity_names = root_path + "/crops/monthly/commodity/"
var monthly_commodity_info = function (commodity_name) { return monhtly_commodity_names + commodity_name }
var monthly_data_url = function (date) { root_path + "/crops/monthly/" + date.toString() }
var all_monthly_data = root_path + "/crops/monthly/all"

// 