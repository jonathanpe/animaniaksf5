<?php

namespace App\Form;

use Symfony\Component\Form\FormBuilder;
use Symfony\Component\Form\FormView;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Security\Csrf\CsrfTokenManager;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;


class FormToJson{

    private $encoders ;
    private $normalizers ;
    private $serializer ;
    private $form ;
    private $formView ;
    private $options ;
    private $formatedForm ;

    /**
     * FormToJson constructor.
     */
    public function __construct( $form )
    {
        $this->encoders = [new JsonEncoder()];
        $this->normalizers = [new ObjectNormalizer()];
        $this->serializer = new Serializer( $this->normalizers, $this->encoders );
        $this->form = $form ;
        $this->formView = $this->form->createView();
        $this->options =
        $this->formatedForm = [];

        $this->init();

    }

    private function init(){
        $this->formToArray();
    }

    private function format( $champ ){

        $champView = $this->formView->children[ $champ->getName() ] ;

        $formatedChamp = [] ;

        $champDatas = $champView->vars;


      // $formChamp =  $this->form->get( $champ['name'] ) ?? null ;
        $formatedChamp['type'] = $champ->getConfig()->getType()->getInnerType()->getBlockPrefix() ;
        $formatedChamp['name'] = $champDatas['name'] ;
        $formatedChamp['full_name'] = $champDatas['full_name'] ;
        $formatedChamp['options'] = $this->generateOptions( $champDatas ) ;
        $formatedChamp['children'] = [] ;
        foreach($champ->all() as  $champName => $champDatas ){
            $formatedChamp['children'][ $champName ] =  $champDatas ;
        }

        return $formatedChamp ;
    }

    public function generateOptions( $champDatas ){
        $options = [] ;
        $options['id'] = $champDatas['id'] ;
        $options['value'] = $champDatas['value'] ;
        $options['required'] = $champDatas['required'] ;
        $options['label'] = $champDatas['label'] ;
        $options['attr'] = $champDatas['attr'] ;
        return $options ;
    }
    public function formToArray(){

        $this->formatedForm = $this->generateFormIdentity( $this->formView );
        $this->formatedForm['properties'] = $this->generateFormProperties();


    }


    public function generateFormProperties(){
        $formProperties = [] ;
        $options = $this->form->getConfig()->getOptions();

        foreach($this->form->all() as $champName => $champDatas){
            $formProperties[ $champName ] = $this->format( $champDatas );
        }

         if( $options['csrf_protection'] ) $formProperties['token'] = $this->generateFormToken($options['csrf_field_name']) ;
        /*
        foreach($this->formView->children as $childrenName => $children){

            $formProperties['properties'][ $childrenName ] = $this->format( $children );

        }*/
        return $formProperties ;
    }

    public function generateFormIdentity( $formView ){

        $formDatas = $formView->vars ;

        $formIdentity = [] ;
        $formIdentity['name'] = $formDatas['name'];
        $formIdentity['method'] = $formDatas['method'];
        $formIdentity['id'] = $formDatas['id'];
        $formIdentity['attr'] = $formDatas['attr'];

        return $formIdentity ;
    }

    public function generateFormToken( $csrfFieldName )
    {
        $token = [] ;
        $tokenDatas = $this->formView->children[ $csrfFieldName ]->vars;

        $token['name'] = $tokenDatas['name'];
        $token['type'] = 'hidden' ;
        $token['full_name'] = $tokenDatas['full_name'];
        $token['options'] =  $this->generateOptions( $tokenDatas ) ;
        return $token ;

    }
    public function generateJson(){

        return $this->serializer->serialize($this->formatedForm, 'json');
    }
}