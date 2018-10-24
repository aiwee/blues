// var myPrototypeModule = (function (){
//
//     var privateVar = "Alex Castrounis",
//         count = 0;
//
//     function PrototypeModule(name){
//         this.name = name;
//     }
//
//     function privateFunction() {
//         console.log( "Name:" + privateVar );
//         count++;
//     }
//
//     PrototypeModule.prototype.setName = function(strName){
//         this.name = strName;
//     };
//
//     PrototypeModule.prototype.getName = function(){
//         privateFunction();
//     };
//
//     return PrototypeModule;
// })();

// /* Modal Base CSS */
// .scotch-overlay
// {
//     position: fixed;
//     z-index: 9998;
//     top: 0;
//     left: 0;
//
//     opacity: 0;
//
//     width: 100%;
//     height: 100%;
//
//     -webkit-transition: 1ms opacity ease;
//     -moz-transition: 1ms opacity ease;
//     -ms-transition: 1ms opacity ease;
//     -o-transition: 1ms opacity ease;
//     transition: 1ms opacity ease;
//
//     background: rgba(0,0,0,.6);
// }
//
// .scotch-modal
// {
//     position: absolute;
//     z-index: 9999;
//     top: 50%;
//     left: 50%;
//
//     opacity: 0;
//
//     width: 94%;
//     padding: 24px 20px;
//
//     -webkit-transition: 1ms opacity ease;
//     -moz-transition: 1ms opacity ease;
//     -ms-transition: 1ms opacity ease;
//     -o-transition: 1ms opacity ease;
//     transition: 1ms opacity ease;
//
//     -webkit-transform: translate(-50%, -50%);
//     -moz-transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     -o-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//
//     border-radius: 2px;
//     background: #fff;
// }
//
// .scotch-modal.scotch-open.scotch-anchored
// {
//     top: 20px;
//
//     -webkit-transform: translate(-50%, 0);
//     -moz-transform: translate(-50%, 0);
//     -ms-transform: translate(-50%, 0);
//     -o-transform: translate(-50%, 0);
//     transform: translate(-50%, 0);
// }
//
// .scotch-modal.scotch-open
// {
//     opacity: 1;
// }
//
// .scotch-overlay.scotch-open
// {
//     opacity: 1;
//
// }
//
// /* Close Button */
// .scotch-close
// {
//     font-family: Helvetica,Arial,sans-serif;
//     font-size: 24px;
//     font-weight: 700;
//     line-height: 12px;
//
//     position: absolute;
//     top: 5px;
//     right: 5px;
//
//     padding: 5px 7px 7px;
//
//     cursor: pointer;
//
//     color: #fff;
//     border: 0;
//     outline: none;
//     background: #e74c3c;
// }
//
// .scotch-close:hover
// {
//     background: #c0392b;
// }
//
// /* Default Animation */
//
// .scotch-overlay.fade-and-drop
// {
//     display: block;
//
//     opacity: 0;
// }
//
// .scotch-modal.fade-and-drop
// {
//     top: -300%;
//
//     opacity: 1;
//
//     display: block;
// }
//
// .scotch-modal.fade-and-drop.scotch-open
// {
//     top: 50%;
//
//     -webkit-transition: 500ms top 500ms ease;
//     -moz-transition: 500ms top 500ms ease;
//     -ms-transition: 500ms top 500ms ease;
//     -o-transition: 500ms top 500ms ease;
//     transition: 500ms top 500ms ease;
// }
//
// .scotch-modal.fade-and-drop.scotch-open.scotch-anchored
// {
//
//     -webkit-transition: 500ms top 500ms ease;
//     -moz-transition: 500ms top 500ms ease;
//     -ms-transition: 500ms top 500ms ease;
//     -o-transition: 500ms top 500ms ease;
//     transition: 500ms top 500ms ease;
// }
//
// .scotch-overlay.fade-and-drop.scotch-open
// {
//     top: 0;
//
//     -webkit-transition: 500ms opacity ease;
//     -moz-transition: 500ms opacity ease;
//     -ms-transition: 500ms opacity ease;
//     -o-transition: 500ms opacity ease;
//     transition: 500ms opacity ease;
//
//     opacity: 1;
// }
//
// .scotch-modal.fade-and-drop
// {
//     -webkit-transition: 500ms top ease;
//     -moz-transition: 500ms top ease;
//     -ms-transition: 500ms top ease;
//     -o-transition: 500ms top ease;
//     transition: 500ms top ease;
// }
//
// .scotch-overlay.fade-and-drop
// {
//     -webkit-transition: 500ms opacity 500ms ease;
//     -moz-transition: 500ms opacity 500ms ease;
//     -ms-transition: 500ms opacity 500ms ease;
//     -o-transition: 500ms opacity 500ms ease;
//     transition: 500ms opacity 500ms ease;
// }
//
// /* Demo Styles */
// html
// {
//     box-sizing: border-box;
// }
//
// *
// {
//     box-sizing: inherit;
// }
//
// body
// {
//     font-family: Helvetica,Arial,san-serif;
//     font-size: 16px;
//
//     margin: 0;
//     padding: 0;
// }
//
// #content
// {
//     display: none;
// }
//
// .trigger-button
// {
//     font-size: 17px;
//
//     position: relative;
//     top: 100px;
//
//     display: block;
//
//     margin: auto;
//     padding: 10px 30px;
//
//     cursor: pointer;
//
//     color: #fff;
//     border: 0;
//     border-radius: 3px;
//     outline: none;
//     background: #2ecc71;
//     box-shadow: 0 5px 1px #27ae60;
// }
//
// .trigger-button:hover
// {
//     background: #27ae60;
//     box-shadow: 0 5px 1px #145b32;
// }
//
// .trigger-button:active
// {
//     border-top: 5px solid white;
//     box-shadow: none;
// }

// Create an immediately invoked functional expression to wrap our code
(function() {

    // Define our constructor
    this.Modal = function() {

        // Create global element references
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;

        // Determine proper prefix
        this.transitionEnd = transitionSelect();

        // Define option defaults
        var defaults = {
            autoOpen: false,
            className: 'fade-and-drop',
            closeButton: true,
            content: "",
            maxWidth: 600,
            minWidth: 280,
            overlay: true
        };

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        if(this.options.autoOpen === true) this.open();

    };

    // Public Methods

    Modal.prototype.close = function() {
        var _ = this;
        this.modal.className = this.modal.className.replace(" scotch-open", "");
        this.overlay.className = this.overlay.className.replace(" scotch-open",
            "");
        this.modal.addEventListener(this.transitionEnd, function() {
            _.modal.parentNode.removeChild(_.modal);
        });
        this.overlay.addEventListener(this.transitionEnd, function() {
            if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
        });
    };

    Modal.prototype.open = function() {
        buildOut.call(this);
        initializeEvents.call(this);
        window.getComputedStyle(this.modal).height;
        this.modal.className = this.modal.className +
            (this.modal.offsetHeight > window.innerHeight ?
                " scotch-open scotch-anchored" : " scotch-open");
        this.overlay.className = this.overlay.className + " scotch-open";
    };

    // Private Methods

    function buildOut() {

        var content, contentHolder, docFrag;

        /*
         * If content is an HTML string, append the HTML string.
         * If content is a domNode, append its content.
         */

        if (typeof this.options.content === "string") {
            content = this.options.content;
        } else {
            content = this.options.content.innerHTML;
        }

        // Create a DocumentFragment to build with
        docFrag = document.createDocumentFragment();

        // Create modal element
        this.modal = document.createElement("div");
        this.modal.className = "scotch-modal " + this.options.className;
        this.modal.style.minWidth = this.options.minWidth + "px";
        this.modal.style.maxWidth = this.options.maxWidth + "px";

        // If closeButton option is true, add a close button
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement("button");
            this.closeButton.className = "scotch-close close-button";
            this.closeButton.innerHTML = "&times;";
            this.modal.appendChild(this.closeButton);
        }

        // If overlay is true, add one
        if (this.options.overlay === true) {
            this.overlay = document.createElement("div");
            this.overlay.className = "scotch-overlay " + this.options.className;
            docFrag.appendChild(this.overlay);
        }

        // Create content area and append to modal
        contentHolder = document.createElement("div");
        contentHolder.className = "scotch-content";
        contentHolder.innerHTML = content;
        this.modal.appendChild(contentHolder);

        // Append modal to DocumentFragment
        docFrag.appendChild(this.modal);

        // Append DocumentFragment to body
        document.body.appendChild(docFrag);

    }

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function initializeEvents() {

        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', this.close.bind(this));
        }

    }

    function transitionSelect() {
        var el = document.createElement("div");
        if (el.style.WebkitTransition) return "webkitTransitionEnd";
        if (el.style.OTransition) return "oTransitionEnd";
        return 'transitionend';
    }

}());

var myContent = document.getElementById('content');

var myModal = new Modal({
    content: myContent
});

var triggerButton = document.getElementById('trigger');

triggerButton.addEventListener('click', function() {
    myModal.open();
});