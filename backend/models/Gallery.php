<?php

namespace backend\models;

use Yii;

/**
 * This is the model class for table "gallery".
 *
 * @property integer $id
 * @property string $name
 * @property string $name_en
 * @property string $price
 * @property string $price_en
 * @property string $text
 * @property string $text_en
 * @property integer $sale
 * @property integer $active
 * @property integer $populyar
 * @property integer $catalog
 * @property string $img
 * @property string $img_2
 * @property string $img_3
 * @property integer $color
 * @property integer $attribute_id
 * @property string $description
 * @property string $description_en
 * @property integer $test
 */
class Gallery extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'gallery';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'text', 'text_en', 'sale', 'catalog'], 'required'],
            [['text', 'text_en'], 'string'],
            [['sale', 'active', 'populyar', 'catalog', 'color', 'attribute_id', 'test'], 'integer'],
            [['name', 'name_en', 'price', 'price_en', 'img', 'img_2', 'img_3', 'description', 'description_en'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'name_en' => 'Name En',
            'price' => 'Price',
            'price_en' => 'Price En',
            'text' => 'Text',
            'text_en' => 'Text En',
            'sale' => 'Sale',
            'active' => 'Active',
            'populyar' => 'Populyar',
            'catalog' => 'Catalog',
            'img' => 'Img',
            'img_2' => 'Img 2',
            'img_3' => 'Img 3',
            'color' => 'Color',
            'attribute_id' => 'Attribute ID',
            'description' => 'Description',
            'description_en' => 'Description En',
            'test' => 'Test',
        ];
    }
}
