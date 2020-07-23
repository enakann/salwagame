import os, sys
from PIL import Image

height,width = 250, 300

import os

rootdir = r"C:\Users\navaneek\Desktop\NodeJsWebDev\Stephen_mern_stack\ReactReduxCourse\salwagame\public\images"
def redadir():
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            filename,ext=file.split(".")
            if ext in ["png","jpg","jpeg","png"]:
                    f=os.path.join(subdir, file)
                    print(f)
                    im = Image.open(f)
                    img = im.resize((width, height), Image.ANTIALIAS)
                    img.save(f)



redadir()
# for infile in sys.argv[1:]:
#     outfile = os.path.splitext(infile)[0] + ".thumbnail"
#     if infile != outfile:
#         try:
#             im = Image.open(infile)
#             im.thumbnail(size, Image.ANTIALIAS)
#             im.save(outfile, "JPEG")
#         except IOError:
#             print("cannot create thumbnail for '%s'" % infile)