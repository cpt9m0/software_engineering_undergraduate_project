from django.test import TestCase, Client
from django.urls import reverse

from . import models

import json


class TestUniversityViews(TestCase):
    """
    This class tests the views(controllers) for university
    """
    def setUp(self):
        self.client = Client()
        self.location = models.Location.objects.create(stringLocation="test")
        self.university = models.University.objects.create(
            name="test",
            location=self.location
            )
        self.university_url = reverse("rate:get_universities")
        self.rate_url = reverse(
            "rate:get_rates",
            kwargs={'university_id': self.university.id}
            )
        self.department_url = reverse(
            "rate:get_departments",
            kwargs={'university_id': self.university.id}
            )
        self.top_universities_url = reverse("rate:get_top_universities")

    def test_get_universities(self):
        """
        Tests geting list of universities
        """
        response = self.client.get(self.university_url)
        real_data = json.dumps(
            [
                {
                    'id': self.university.id,
                    'name': self.university.name,
                    'location': self.location.id,
                    'image': self.university.image or None
                }
            ]
        )
        print(real_data)
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(response.content, real_data)
