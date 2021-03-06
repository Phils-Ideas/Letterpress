Letterpress.Utils.seedData = function() {
  Letterpress.Collections.Pages.remove({});

  Letterpress.Collections.Pages.insert({
    path: '/',
    template: 'landing-page',
    content: '' +
    '![Cover](/cover.jpg "Cover")' +
    '\n\n' +
    '*Write your own book with this WYSIWYG markdown powered book app*' +
    '\n\n' +
    '[Try it](/try "Try It") [Buy It](# "Buy It")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Try',
    template: 'info',
    path: '/try',
    content: '' +
    '##Coming soon' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Buy',
    template: 'info',
    path: '/buy',
    content: '' +
    '##Coming soon' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Subscribe Confirmation',
    template: 'info',
    path: '/subscribe-confirmation',
    content: '' +
    '##Thank you for your purchase. You are now subscribed' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Charge Confirmation',
    template: 'info',
    path: '/charge-confirmation',
    content: '' +
    '##Thank you for your purchase. You have completed your purchase' +
    '\n\n' +
    '[Home](/ "Home")'
  });

  Letterpress.Collections.Pages.insert({
    title: 'Chapter 1',
    template: 'chapter',
    content: 'Bacon ipsum dolor amet do jerky chuck reprehenderit pork chop tempor ball tip ' +
    'proident tail velit pariatur jowl. Labore hamburger nisi, andouille meatball aute ribeye ' +
    'leberkas cupidatat. Dolore pastrami ball tip tenderloin ullamco nisi elit voluptate. ' +
    'Doner venison nulla in excepteur alcatra magna ground round turkey veniam ullamco tri-tip ' +
    'in meatball. Landjaeger voluptate.',
    premiumContent: '' +
    loremIpsumBacon() +
    '\n\n' +
    '[Home](/ "Home")',
    order: 1
  });

  Letterpress.Collections.Pages.insert({
    title: 'Chapter 2',
    template: 'chapter',
    content: 'Id pork loin fatback, fugiat pancetta tri-tip leberkas pork belly frankfurter ' +
    'proident. Non cupim ex, sunt doner tail strip steak. Do tempor pork belly short loin, chuck ' +
    'pork ground round frankfurter corned beef. Salami voluptate in et, cillum duis tri-tip ' +
    'swine bresaola eu t-bone ribeye adipisicing.',
    premiumContent: '' +
    loremIpsumBacon() +
    '\n\n' +
    '[Home](/ "Home")',
    order: 2
  });

  function loremIpsumBacon () {
    return '###Premuium Content' +
      '\n\n' +
      'Bacon ipsum dolor amet do jerky chuck reprehenderit pork chop tempor ball tip ' +
      'proident tail velit pariatur jowl. Labore hamburger nisi, andouille meatball aute ribeye ' +
      'leberkas cupidatat. Dolore pastrami ball tip tenderloin ullamco nisi elit voluptate. ' +
      'Doner venison nulla in excepteur alcatra magna ground round turkey veniam ullamco tri-tip ' +
      'in meatball. Landjaeger voluptate commodo minim, pariatur pig kielbasa biltong nulla sint ' +
      'beef cillum.' +
      '\n\n' +
      'Id pork loin fatback, fugiat pancetta tri-tip leberkas pork belly frankfurter proident. ' +
      'Non cupim ex, sunt doner tail strip steak. Do tempor pork belly short loin, chuck pork ' +
      'ground round frankfurter corned beef. Salami voluptate in et, cillum duis tri-tip swine ' +
      'bresaola eu t-bone ribeye adipisicing.' +
      '\n\n' +
      'Sed ad leberkas dolore aute capicola deserunt in ribeye proident turkey. Ipsum pork loin ' +
      'cow excepteur commodo, ex ad non exercitation porchetta tongue nostrud pork chop aliqua. ' +
      'Brisket pork aute t-bone sunt enim elit nisi ex ut irure commodo esse nostrud. Est quis ' +
      'proident do. Excepteur quis eu velit.' +
      '\n\n' +
      'Occaecat fatback spare ribs sed pork pastrami. Adipisicing frankfurter dolore, hamburger ' +
      'corned beef drumstick venison. Tongue aute culpa salami alcatra adipisicing pork belly. ' +
      'Duis sed eiusmod, cillum mollit kielbasa pancetta qui meatball porchetta velit.' +
      '\n\n' +
      'Laboris jowl adipisicing beef ribs ham, lorem cillum mollit t-bone consectetur doner do ' +
      'nulla in. Non esse ut, filet mignon frankfurter tenderloin pancetta. Ullamco sausage ' +
      'excepteur, elit cupidatat velit pastrami ipsum chuck. Irure enim beef ribs mollit, ' +
      'landjaeger leberkas ullamco laborum chuck meatball pork loin. Eu irure flank chuck ' +
      'consectetur nulla in fatback sunt filet mignon.';

  }
};
