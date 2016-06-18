# coding: utf-8
'''
getFoodType() is the core function here which needs to be called.
See the function doc for more details.
main() calls a sample itemlist, which is commented out
'''
from textblob import TextBlob
from textblob.np_extractors import ConllExtractor
from textblob.taggers import NLTKTagger
from textblob import Word
import numpy as np
import json
nltkTagger = NLTKTagger()

file_meatlist = open('cleaner_meat.txt', 'r')
file_vegetarianlist = open('cleaner_vegetarian.txt', 'r')
file_veganlist = open('cleaner_vegan.txt', 'r')    # not being used right now

# turn to 1 to display debug/info
dbg = 0

samplecall = 0

def filter_list(filter_kwds, menuitem):
    matchFound = 0
    if all(isinstance(elem, list) for elem in filter_kwds) == False:
        # is a set
        for kwd in filter_kwds:
            if (menuitem.lower().find(kwd.lower()) != -1):
                matchFound = 1
                break
    else:
        for kwd_entry in filter_kwds:
            # print kwd_entry
            for kwd in kwd_entry:
                if (menuitem.lower().find(kwd.lower()) != -1):
                    matchFound = 1
                    break

    if (matchFound == 1):
        return 1
    else:
        return 0


def vegan_check(vegan_kwds, menuitem):
    matchFound = 0
    for kwd in vegan_kwds:
        if (menuitem.lower().find(kwd.lower()) != -1):
            matchFound = 1
            break

    if (matchFound == 1):
        return 1
    else:
        return 0


def process_keywords(input_file):
    list = []
    for line in input_file:
        blob = TextBlob(line, pos_tagger=nltkTagger)
        kwds = blob.tokenize()
        if len(kwds) > 2:
            kwds = blob.noun_phrases
        list.append(kwds)
    return list


def subtract_l1_from_l2(list1, list2):
    for kwd_set in list1:
        # print kwd_set
        for kwd in kwd_set:
            while kwd in list2:
                # print kwd
                list2.discard(kwd)
    return list2



meat_keywords = process_keywords(file_meatlist)
vegetarian_keywords = process_keywords(file_vegetarianlist)
vegan_keywords = ['vegan']
flat_meatlist = set()
for wordset in meat_keywords:
    for word in wordset:
        flat_meatlist.add(word)
meat_keywords_cleaned = subtract_l1_from_l2(vegetarian_keywords, flat_meatlist)
foodTypeDict = {1:"vegan", 2:"vegetarian", 3:"meat"}

def dbg_print(stmt):
    if dbg == 1:
        print stmt

'''
Pass this function a list of menu items, and it will return a list of same size with a status code for each
1 indicates vegan, 2 is veg, 3 indicates non-veg.
Call 'getFoodTypeName(type_code) to get a name string of the status code
'''
def getFoodType(food_list):
    resultList = []
    for item in food_list:
        isVegan = vegan_check(vegan_keywords, item)
        if isVegan == 1:
            dbg_print(item + " is vegan!")
            resultList.append(1)
            continue
        isMeat = filter_list(meat_keywords_cleaned, item)
        if (isMeat == 1):
            dbg_print(item + " is meat")
            resultList.append(3)
        else:
            isVegetarian = filter_list(vegetarian_keywords, item)
            if (isVegetarian == 1):
                dbg_print( item + " is vegetarian")
                resultList.append(2)
            else:
                dbg_print( item + " is vegan!")
                resultList.append(1)
    return resultList


def getFoodTypeName(food_type_enum):
    if food_type_enum == 1:
        return "vegan"
    if food_type_enum == 2:
        return "vegetarian"
    if food_type_enum == 3:
        return "non-vegetarian"

def sample_call():
    # a sample case which passes a list of menu items to worker method
    # to get a list of result code for each item.
    item1 = 'Crab saute with a side of peas'
    item2 = 'Crispy artichoke hearts'
    item3 = 'French onion soup'
    item4 = 'Clam chowder'
    item5 = 'House special caesar salad'
    item_list = [item1, item2, item3, item4, item5]
    resList = getFoodType(item_list)
    for i in range(len(item_list)):
        print item_list[i] + " : " + getFoodTypeName(resList[i])

def main():
    print ""

    if(samplecall == 1):
        sample_call()



if __name__ == '__main__':
    main()