<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\FormToJson;
use App\Form\LoginType;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class AuthController extends AbstractController
{

    /**
     * @Route("/subscribe", name="auth_subscribe")
     */
    public function subscribe( Request $request, UserPasswordEncoderInterface $userPasswordEncoder): Response
    {

        $user = new User();

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        $formToJson = new FormToJson( $form );
        $formSchema = $formToJson->generateJson() ;

        if ($form->isSubmitted() && $form->isValid()) {

            $encodedPassword = $userPasswordEncoder->encodePassword(
                             $user,
                             $user->getPassword()
            ) ;


            $user->setPassword( $encodedPassword ) ;
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_index');
        }

        return $this->render('auth/subscribe.html.twig',[
            'user' => $user,
            'form' => $form->createView(),
            'formSchema' => $formSchema
        ]);
    }

    /**
     * @Route("/login", name="auth_login")
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }


        $user = new User();

        $loginForm = $this->createForm(LoginType::class, $user);
        $loginForm->handleRequest($request);

        $formToJson = new FormToJson( $loginForm );
        $loginFormSchema = $formToJson->generateJson() ;

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();


        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

//        [ 'loginForm' => $loginFormSchema ]
    //    $oldArgus =  ['last_username' => $lastUsername, 'error' => $error] ;

        return $this->render('security/auth.html.twig', [ 'loginForm' => $loginFormSchema ,'last_username' => $lastUsername, 'error' => $error] );
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
