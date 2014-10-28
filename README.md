sag
===

A POC CLI to create animated SVGs from directory of frames. 

The generated images work very similar to GIFs - but only better.

- They have better colour spectrum
- Are on the whole lower file size when using compressed JPGs
- When using transparent PNGs as the frames - they are truly transparent with no matte like GIFs

===

#### Getting Started

Install dependencies

```
npm install
```


Find out the options
```
./sag --help
```


Make some frames, and get going with your images.

===

#### Caveats

Testing of this CLI beyond generating just a couple of images is yet to be performed. For now - expect the unexpected.

===

#### Browser support

Again, need to test this. I've seen the output file running nicely in Chrome 38, Firefox 21, Safari 8, and Safari on iOS8, but beyond this - I haven't looked as yet - but would expect to be similar to:http://caniuse.com/#feat=svg 


##### IE Support
IE doesn't support SMIL - so the builder includes a IE polyfill for SMIL (the script for this can be found in /libs/smil.user.js - and is from: http://leunen.me/fakesmile/). The path to this when generating your SVGs should be relative to the SVG itself. It's location can be changed using the -m option, and passing in a path - or IE support can be dropped with `-m false` which then simply displays the static final frame in IE.

If supporting animation in IE - in addition to including the polyfill in the SVG itself - a client library will be required in your page (client/src/sag.ieshim.js). An example which has IE support can be found at: http://experiments.wkcreativetech.com/sag/iesupport.html

===

#### Why would I care when this hasn't been tested?

See above - and the truly transparent disco below (try changing the background in developer tools):

![Image of disco]
(http://experiments.wkcreativetech.com/imageformattest/sagtransb.svg)

===

#### Roadmap

• Get full browser support matrix together

• Get test coverage for CLI

• If browser support is significant - build Photoshop extension, allowing for export directly from photoshop having used their animation tools
