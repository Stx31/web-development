#import webbrowser
#url = "https://www.ejemplo.com"
#webbrowser.open(url)

import webbrowser

url = "https://www.ejemplo.com"
chrome_browser = webbrowser.get("chrome")  
chrome_browser.open(url)