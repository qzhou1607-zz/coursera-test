describe('getMenuItem', function() {
  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function() {
    module('common');

    inject(function($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  var sampleItem = {"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2016-12-09T20:54:28.867Z","updated_at":"2016-12-09T20:54:28.867Z","category_short_name":"A","image_present":true};

  it('should return item details if item is found', function() {
    var short_name = 'A1';
    $httpBackend.whenGET(ApiPath + '/menu_items/' + short_name + '.json').respond(sampleItem);
    menuservice.getMenuItem(short_name).then(function(response) {
      expect(response).toEqual(sampleItem);
    });
    $httpBackend.flush();
  });

  it('should throw an error if item is not found', function() {
    var short_name = 'W';
    $httpBackend.whenGET(ApiPath + '/menu_items/' + short_name + '.json').respond(500);
    menuservice.getMenuItem(short_name).then(function(response) {
      expect(response.status).toBe(500);
      expect(response.error).toBe('Internal Server Error');
    });
    $httpBackend.flush();
  });


});
