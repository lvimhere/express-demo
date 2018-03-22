suite('Global Tests', function () {
  test('page has a valid title', function () {
    asset(document.title 
          && document.title.match(/\S/) 
          && document.title.toUpperCase() !== 'TODO'
        )
  })
})