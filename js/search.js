

  // const input = document.querySelector('#searchItem');
  // const suggestions = document.querySelector('.suggestions ul');
  
  // const searchItem = ['Vương Nhất Bác',
  // 'Sơn Tùng MTP',
  // 'Phương Hằng',
  // 'Phạm Thoại',
  // 'Ngọc Trinh',
  // 'Mono',
  // 'Meo meo',
  // 'Lộc phụ hồ',
  // 'Huấn hoa hồng',
  // 'Đàm Vĩnh Hưng',
  // 'Chú Tiến Bịp',
  // 'Chipu'];
  
  // function search(str) {
  //   let results = [];
  //   const val = str.toLowerCase();
  
  //   for (i = 0; i < searchItem.length; i++) {
  //     if (searchItem[i].toLowerCase().indexOf(val) > -1) {
  //       results.push(searchItem[i]);
  //     }
  //   }
  
  //   return results;
  // }
  
  // function searchHandler(e) {
  //   const inputVal = e.currentTarget.value;
  //   let results = [];
  //   if (inputVal.length > 0) {
  //     results = search(inputVal);
  //   }
  //   showSuggestions(results, inputVal);
  // }
  
  // function showSuggestions(results, inputVal) {
      
  //     suggestions.innerHTML = '';
  
  //   if (results.length > 0) {
  //     for (i = 0; i < results.length; i++) {
  //       let item = results[i];
  //       // Highlights only the first match
  //       // TODO: highlight all matches
  //       const match = item.match(new RegExp(inputVal, 'i'));
  //       item = item.replace(match[0], `<strong>${match[0]}</strong>`);
  //       suggestions.innerHTML += `<li>${item}</li>`;
  //     }
  //     suggestions.classList.add('has-suggestions');
  //   } else {
  //     results = [];
  //     suggestions.innerHTML = '';
  //     suggestions.classList.remove('has-suggestions');
  //   }
  // }
  
  // function useSuggestion(e) {
  //   input.value = e.target.innerText;
  //   input.focus();
  //   suggestions.innerHTML = '';
  //   suggestions.classList.remove('has-suggestions');
  // }
  
  // input.addEventListener('keyup', searchHandler);
  // suggestions.addEventListener('click', useSuggestion);

  const input = document.querySelector('#search');
  const suggestions = document.querySelector('#search-suggestion ul');
  
  const searchItem = [ 'Sơn Tùng MTP',
  'Chipu',
  'Mono',
  'Vương Nhất Bác',
  'Ngọc Trinh',
  'Phạm Thoại',
  'Trần Đức Bo',
  'Sơn Tùng MTP',
  'Phương Hằng',
  'Huấn Hoa Hồng',
  'Tiến Bịp Bợm',
  'Đàm Vĩnh Hưng',
  'Lộc Fuho'];
  
  function search(str) {
    let results = [];
    const val = str.toLowerCase();
  
    for (i = 0; i < searchItem.length; i++) {
      if (searchItem[i].toLowerCase().indexOf(val) > -1) {
        results.push(searchItem[i]);
      }
    }
  
    return results;
  }
  
  function searchHandler(e) {
    const inputVal = e.currentTarget.value;
    let results = [];
    if (inputVal.length > 0) {
      results = search(inputVal);
    }
    showSuggestions(results, inputVal);
  }
  
  function showSuggestions(results, inputVal) {
      
      suggestions.innerHTML = '';
  
    if (results.length > 0) {
      for (i = 0; i < results.length; i++) {
        let item = results[i];
        // Highlights only the first match
        // TODO: highlight all matches
        const match = item.match(new RegExp(inputVal, 'i'));
        item = item.replace(match[0], `<strong>${match[0]}</strong>`);
        suggestions.innerHTML += `<li class="list-group-item">${item}</li>`;
      }
      suggestions.classList.add('has-suggestions');
    } else {
      results = [];
      suggestions.innerHTML = '';
      suggestions.classList.remove('has-suggestions');
    }
  }
  
  function useSuggestion(e) {
    input.value = e.target.innerText;
    input.focus();
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
  }
  
  input.addEventListener('keyup', searchHandler);
  suggestions.addEventListener('click', useSuggestion);
