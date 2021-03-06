<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastName', TextType::class,[
                'label'=> 'Nom',
                'attr' => ['class' => 'test']
            ])
            ->add('firstName',TextType::class,[
                'label'=> 'Prenom'
            ])
            ->add('email', EmailType::class,[
                'label'=> 'Email'
            ])
            ->add('userName', TextType::class,[
                'label'=> 'Nom d\'utilisateur'
            ])
            ->add('password', PasswordType::class,[
                'label'=> 'Mot de passe'
            ])
            ->add('comfirmPassword', PasswordType::class,[
                'label'=> 'Comfirmer le mot de passe',
                'mapped' => false
            ])
            ->add('newsletter', CheckboxType::class, [
                'label' => 'Recevoir la newsletter',
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
