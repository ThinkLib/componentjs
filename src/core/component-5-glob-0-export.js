/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2017 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License (MPL), version 2.0. If a copy of the MPL was not distributed
**  with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/*  export our global API...  */
if (   (   typeof MODULE === "object"
        && typeof MODULE.exports !== "undefined"
        && typeof GLOBAL.ComponentJS_export === "undefined")
    || (   typeof GLOBAL.ComponentJS_export !== "undefined"
        && GLOBAL.ComponentJS_export === "CommonJS"        ))
    /*  ...to CommonJS environment  */
    MODULE.exports = $cs;
else if (   (   typeof DEFINE === "function"
             && typeof DEFINE.amd === "object"
             && typeof GLOBAL.ComponentJS_export === "undefined")
         || (   typeof GLOBAL.ComponentJS_export !== "undefined"
             && GLOBAL.ComponentJS_export === "AMD"             ))
    /*  ...to AMD environment  */
    DEFINE("ComponentJS", function () { return $cs; });
else {
    /*  ...to regular global environment  */
    $cs.symbol("ComponentJS");
}

