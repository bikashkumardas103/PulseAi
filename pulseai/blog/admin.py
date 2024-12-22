from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin


from blog.models import BlogCategory,Blog
# Register your models here.
class BlogAdmin(SummernoteModelAdmin):
#class BlogAdmin(admin.ModelAdmin):
    list_display=('title','category','created_at','publish')
    search_fields=('title','content')
    list_filter=('category','publish',)
    list_editable=('publish',)
    summernote_fields=('content',)
   # list_per_page=1
admin.site.register(BlogCategory)
admin.site.register(Blog,BlogAdmin)
