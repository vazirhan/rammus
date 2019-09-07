<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "catalog".
 *
 * @property integer $id
 * @property integer $parent_id
 * @property string $name
 * @property string $img
 * @property string $img1
 * @property string $img2
 * @property string $title
 * @property string $h1
 * @property string $keywords
 * @property string $description
 * @property string $text
 * @property string $text_page_2
 * @property string $text_page_3
 * @property string $url
 * @property integer $sort
 * @property integer $home
 * @property integer $active
 * @property integer $test
 * @property string $test2
 * @property string $name_en
 * @property string $h1_en
 * @property string $description_en
 */
class Catalog extends \yii\db\ActiveRecord
{

    public $file;


    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'catalog';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['parent_id', 'name', 'img1', 'img2', 'title', 'h1', 'keywords', 'description', 'text', 'text_page_2', 'text_page_3', 'url', 'test', 'test2'], 'required'],
            [['parent_id', 'sort', 'home', 'active', 'test'], 'integer'],
            [['text', 'text_page_2', 'text_page_3'], 'string'],
            [['name', 'img', 'img1', 'img2', 'title', 'h1', 'keywords', 'description', 'url', 'test2', 'name_en', 'h1_en', 'description_en'], 'string', 'max' => 255],
            [['file'],'image'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'parent_id' => 'Parent ID',
            'name' => 'Name',
            'img' => 'Img',
            'img1' => 'Img1',
            'img2' => 'Img2',
            'title' => 'Title',
            'h1' => 'H1',
            'keywords' => 'Keywords',
            'description' => 'Description',
            'text' => 'Text',
            'text_page_2' => 'Text Page 2',
            'text_page_3' => 'Text Page 3',
            'url' => 'Url',
            'sort' => 'Sort',
            'home' => 'Home',
            'active' => 'Active',
            'test' => 'Test',
            'test2' => 'Test2',
            'name-en' => 'Name En',
            'h1-en' => 'H1 En',
            'description-en' => 'Description En',
        ];
    }
}

/**
 * @param $insert
 * @return mixed
 */
function beforeSave($insert) {

    if($file = \yii\web\UploadedFile::getInstance($this, 'file')){

        $dir = Yii::getAlias('@catalog')."/";

        if(file_exists(!empty($dir.$this->img))){

            unlink($dir.$this->img);

        }
        if(!empty($file->name)){

            $this->img = $file->name;
        }else{

            $this->img =$this->img;
        }

        $file->saveAs($dir.$this->img);

        $imag = Yii::$app->image->load($dir.$this->img);
        $imag->resize('50','50', \yii\image\drivers\Image::INVERSE);
        $imag->save($dir.'50x50/'.$this->img, 90);

        $imag = Yii::$app->image->load($dir.$this->img);
        $imag->resize('100','100', \yii\image\drivers\Image::INVERSE);
        $imag->save($dir.'100x100/'.$this->img, 90);

        $imag = Yii::$app->image->load($dir.$this->img);
        $imag->resize('300','300', \yii\image\drivers\Image::INVERSE);
        $imag->save($dir.'300x300/'.$this->img, 90);

    }




    //return parent::beforeSave($insert);
}