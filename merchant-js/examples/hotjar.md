#Add hotjar tracking for Findify views

This examples shows how you can record your user activity on Findify pages and components (search, recommendations, smart collections).
Please add this code before the Findify script.

```javascript
/*global findifyApiRegistry*/
window.findifyApiRegistry = [function(api) {
    api.on(api.events.gotConfiguration, function(data) {
    
    <!-- Hotjar Tracking Code for www.example.com -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1,hjsv:5};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    
    });
}];
```
