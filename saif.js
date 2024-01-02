function logSuccess() {
  console.log("successfully imported from github ");






// Find the salla-slider element with the specified ID
const slider = document.querySelector('#offer-modal-slider');

// Check if the slider exists to avoid errors
if (slider) {
  // Create a new salla-tabs element
  const tabs = document.createElement('salla-tabs');

  // Construct the tab headers and contents
  tabs.innerHTML = `
    <salla-tab-header slot="header" name="tab_one"><span>شوكلت</span></salla-tab-header>
    <salla-tab-content slot="content" name="tab_one"></salla-tab-content>
    <salla-tab-header slot="header" name="tab_two"><span>عطور</span></salla-tab-header>
    <salla-tab-content slot="content" name="tab_two"></salla-tab-content>
  `;

  // Insert the new tabs into the DOM before the slider
  slider.parentNode.insertBefore(tabs, slider);

  // Move the original slider into the first tab content
  const firstTabContent = tabs.querySelector('salla-tab-content[name="tab_one"]');
  firstTabContent.appendChild(slider);

  // Hide specific divs in the first tab
  const divsToHideInFirstTab = ['product_357728679', 'product_231504990', 'product_203083724', 'product_1177124659'];
  divsToHideInFirstTab.forEach(id => {
    const div = slider.querySelector(`#${id}`);
    if (div) {
      div.style.display = 'none';
    }
  });

  // Show specific divs in the first tab
  const divsToShowInFirstTab = ['product_517778722', 'product_97595232', 'product_812406122', 'product_1443805534'];
  divsToShowInFirstTab.forEach(id => {
    const div = slider.querySelector(`#${id}`);
    if (div) {
      div.style.display = 'block';
    }
  });

  // Add event listener to tab headers
  tabs.querySelectorAll('salla-tab-header').forEach(header => {
    header.addEventListener('click', () => {
      const tabName = header.getAttribute('name');
      const tabContent = tabs.querySelector(`salla-tab-content[name="${tabName}"]`);

      // Move the slider into the clicked tab content
      tabContent.appendChild(slider);

      // Hide specific divs in the first tab
      if (tabName === 'tab_one') {
        divsToHideInFirstTab.forEach(id => {
          const div = slider.querySelector(`#${id}`);
          if (div) {
            div.style.display = 'none';
          }
        });

        // Show specific divs in the first tab
        divsToShowInFirstTab.forEach(id => {
          const div = slider.querySelector(`#${id}`);
          if (div) {
            div.style.display = 'block';
          }
        });
      }

      // Hide specific divs in the second tab
      if (tabName === 'tab_two') {
        const divsToHideInSecondTab = ['product_517778722', 'product_97595232', 'product_812406122', 'product_1443805534'];
        divsToHideInSecondTab.forEach(id => {
          const div = slider.querySelector(`#${id}`);
          if (div) {
            div.style.display = 'none';
          }
        });

        // Show specific divs in the second tab
        const divsToShowInSecondTab = ['product_357728679', 'product_231504990', 'product_203083724', 'product_1177124659'];
        divsToShowInSecondTab.forEach(id => {
          const div = slider.querySelector(`#${id}`);
          if (div) {
            div.style.display = 'block';
          }
        });
      }
    });
  });
}




}

