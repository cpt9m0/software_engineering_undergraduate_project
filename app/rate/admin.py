from django.contrib import admin

from .models import University, Department
from .models import UniversityRate, ProfessorRate
from .models import Location, Tag, Course


class UniversityAdmin(admin.ModelAdmin):
    pass


class DepartmentAdmin(admin.ModelAdmin):
    pass


admin.site.register(University, UniversityAdmin)
admin.site.register(Department, DepartmentAdmin)

admin.site.register(UniversityRate)
admin.site.register(ProfessorRate)
admin.site.register(Location)
admin.site.register(Tag)
admin.site.register(Course)
