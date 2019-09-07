<?php


use mihaildev\elfinder\Assets;
use yii\web\View;
use yii\widgets\ActiveForm;
use yii\helpers\Html;


use mihaildev\ckeditor\CKEditor;
use mihaildev\elfinder\ElFinder;
mihaildev\elfinder\Assets::noConflict($this);
use kartik\file\FileInput;


/* @var $this yii\web\View */
/* @var $model app\models\Catalog */
/* @var $form yii\widgets\ActiveForm */
?>


<div class="catalog-form">

    <?php $form = ActiveForm::begin([
        'options'=>['enctype'=>'multipart/form-data'],
    ]); ?>




    <?php echo $form->field($model, 'file',['options'=>['class'=>'col-xs-3']])->widget(FileInput::classname(),[


        'pluginOptions' => [
            'showCaption' => false,
            'showRemove' => false,
            'showUpload' => false,
            'browseClass' => 'btn btn-primary btn-block',
            'browseIcon' => '<i class="glyphicon glyphicon-camera"></i> ',
            'browseLabel' =>  'Выбрать фото'
        ],
        'options' => ['accept' => 'image/*']
    ]);
    ?>


    <img src="/frontend/web/uploads/catalog/<?=$model->img?>" class="col-xs-3">
    <div class="col-xs-6">

        <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>





        <?= $form->field($model, 'h1')->textInput(['maxlength' => true]) ?>

        <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>
        <?= $form->field($model, 'img')->hiddenInput()->label(false); ?>
    </div>


    <div>

        <?= $form->field($model, 'name_en')->textInput(['maxlength' => true]) ?>
    </div>
    <?= $form->field($model, 'description')->textInput(['maxlength' => true]) ?>

    <?php echo $form->field($model, 'text')->widget(CKEditor::className(), [

        'editorOptions' => ElFinder::ckeditorOptions('elfinder',[/* Some CKEditor Options */]),

    ]); ?>

    <?= $form->field($model, 'text_page_2',['options'=>['class'=>'col-xs-6']])->widget(CKEditor::className(), [

        'editorOptions' => ElFinder::ckeditorOptions('elfinder',[/* Some CKEditor Options */]),

    ]); ?>

    <?= $form->field($model, 'text_page_3',['options'=>['class'=>'col-xs-6']])->widget(CKEditor::className(), [

        'editorOptions' => ElFinder::ckeditorOptions('elfinder',[/* Some CKEditor Options */]),

    ]); ?>

    <?= $form->field($model, 'url')->textInput() ?>

    <?= $form->field($model, 'sort',['options'=>['class'=>'col-xs-6']])->textInput() ?>

    <?= $form->field($model, 'home',['options'=>['class'=>'col-xs-6']])->checkbox(['0','1']) ?>

    <?= $form->field($model, 'active',['options'=>['class'=>'col-xs-6']])->checkbox(['0','1']) ?>
    <?= $form->field($model, 'test',['options'=>['class'=>'col-xs-6']])->checkbox(['0','1']) ?>


    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
