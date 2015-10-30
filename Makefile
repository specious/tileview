default: build

build:
	mkdir dist
	zip -r dist/tileview.zip manifest.json *.html *.js gfx

clean:
	rm -rfv dist