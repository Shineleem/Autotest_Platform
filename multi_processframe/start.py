# -*- coding: utf-8 -*-
__author__ = "Lee.le"

import sys
import os
config_Path = os.path.dirname(os.path.join(os.getcwd()))
# os.chdir(os.path.join(os.getcwd()))
sys.path.extend([config_Path])
from XXXX import inlet

def begin():
    inlet.main()


if __name__ == '__main__':
    begin()
