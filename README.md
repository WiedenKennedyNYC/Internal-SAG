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

IE doesn't support SMIL - so you would likely need to use a polyfill for SMIL (such as http://leunen.me/fakesmile/), or be happy with the image being a static representation on the last frame.

===

#### Why would I care when this hasn't been tested?

See above - and the truly transparent disco below (try changing the background in developer tools):

![Image of disco]
(http://experiments.wkcreativetech.com/imageformattest/sagtransb.svg)

