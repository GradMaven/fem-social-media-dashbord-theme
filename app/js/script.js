
const darkButton =document.getElementById('')
const lightButton = document.getElementById('')
 const setColorMode = () => {
    console.log('selectMode');
    console.log(localStorage.getItem('colorMode'));

    if(localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
        darkButton.click();
    }else if(localStorage.getItem('colorMode') == 'light') {
        setLightMode();
        lightButton.click();
 }
};
 
 const setDarkMode = () => {
    console.log('setDarkMode');
    document.querySelector('body').classList = 'dark';
 };

 const checkMode = () => {
    if(localStorage.getItem('colorMode') == null){
        
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches){
       lightButton.click(); 
    } else if
        (window.matchMedia('(prefers-color-scheme: dark)').matches){
            darkButton.click();
        }
    
 };
    const checkModeChange = () => {
        window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
            console.log(checkMode);
           checkMode();

        })
    }

 const setLightMode = () => {
    (document.querySelector('body').classList = 'light');
 };

    setColorMode();
    checkMode();
    checkModeChange();

const radioButtons = document.querySelectorAll('.toggle_wrapper input');
for (let i=0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', (event) => {
      if(darkButton.checked){
        setDarkMode();
        localStorage.setItem('colorMode', 'dark');
      }else {

          localStorage.setItem('colorMode', 'light');
          setLightMode();
      }
    });
}