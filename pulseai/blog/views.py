from django.shortcuts import render, HttpResponse,get_object_or_404
from blog.models import Blog,BlogCategory

# Create your views here.
def index(request):
   #return HttpResponse("Hello,World!!!")
   return render(request,'index.html')
def about(request):
    return render(request,'blog/about.html')
def contact(request):
    mobile = 7979046793
    email =  "dbikash@123"
    a = 10
    b = 20
    languages = ['c','c++','java','python']

    blog ={
        "title": "Blog Title",
        "author": "John",
        "content": "Blog Details"
    }
    students = [
        {"roll": 1,"name":"bikash","cgpa":8.9},
        {"roll": 2,"name":"siri","cgpa":9.0},
        {"roll": 3,"name":"thomas","cgpa":7.9},
        {"roll": 4,"name":"smith","cgpa":8.8},
    ]
    context = {
        "mob": mobile,
        "email": email,
        "a" : a,
        "b" : b,
        "languages": languages,
        'blog': blog,
        "students":students,
                }
    return render(request,'blog/contact.html',context)



def all_blogs(request,cid=0):
    if cid==0:
        blogs=Blog.objects.filter(publish=True).order_by('-update_at')
    else:
        blogs=Blog.objects.filter(publish=True,category=cid).order_by('-update_at')
    categories=BlogCategory.objects.all().order_by('category')
    context ={
        'blogs': blogs,
        'categories':categories
    }
   
    return render(request, 'blog/blog.html',context)


def blog_details(request, bid):
   # blog=Blog.objects.filter(id=bid)
    blog=get_object_or_404(Blog,pk=bid)
    context ={
        'blog':blog
    }
    return render(request, 'blog/details.html',context)