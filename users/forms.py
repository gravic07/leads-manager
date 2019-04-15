from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import password_validation
from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):

    first_name = forms.CharField(
        # help_text=("Enter user first and last name."),
        # label=("First Name"),
        max_length=30,
        required=True,
        widget=forms.TextInput(
            attrs={'class': 'input',
                   'placeholder': 'Your First Name'
                   }
        ),
    )

    last_name = forms.CharField(
        # help_text=("Enter user first and last name."),
        # label=("First Name"),
        max_length=150,
        required=True,
        widget=forms.TextInput(
            attrs={'class': 'input',
                   'placeholder': 'Your Last Name'
                   }
        ),
    )

    email = forms.CharField(
        # help_text=("Enter user first and last name."),
        # label=("First Name"),
        max_length=254,
        required=True,
        widget=forms.EmailInput(
            attrs={'class': 'input',
                   'placeholder': 'Your Email Address'
                   }
        ),
    )

    password1 = forms.CharField(
        help_text=password_validation.password_validators_help_text_html(),
        label=("Password"),
        widget=forms.PasswordInput(
            attrs={'class': 'input',
                   'placeholder': 'Password'
                   }
        ),
    )

    password2 = forms.CharField(
        help_text=("Enter the same password as before, for verification."),
        label=("Password Confirmation"),
        widget=forms.PasswordInput(
            attrs={'class': 'input',
                   'placeholder': 'Password'
                   }
        ),
    )

    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'picture')


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'picture')
